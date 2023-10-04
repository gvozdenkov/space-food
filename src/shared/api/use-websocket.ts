import { CookieService } from '#shared/lib';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export type WebSocketProps = {
  url: string;
  querykeys: string[];
  useToken?: boolean;
};

export const useWebSocket = ({ url, useToken = false, querykeys }: WebSocketProps) => {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const createWebSocket = (token?: string) => {
      const websocket = token ? new WebSocket(`${url}?token=${token}`) : new WebSocket(`${url}`);

      websocket.onopen = () => {
        console.log('ws connected...');
      };

      websocket.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        queryClient.setQueryData(querykeys, data);
        setStatus('idle');
      };

      return websocket;
    };

    const websocket = useToken
      ? createWebSocket(CookieService.getAccessToken())
      : createWebSocket();

    return () => {
      websocket.close();
    };
    // eslint-disable-next-line
  }, []);

  const isLoading = status === 'loading';

  return { isLoading };
};
