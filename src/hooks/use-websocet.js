import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { CookieService } from '../utils/cookie-service';
import { QUERYKEY } from '../utils/config';

export const useWebSocket = ({ url }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const accessToken = CookieService.getAccessToken();
    const websocket = new WebSocket(`${url}?token=${accessToken}`);

    websocket.onopen = (evt) => {
      console.log('ws connected...');
    };

    websocket.onmessage = (evt) => {
      const data = JSON.parse(evt.data);

      queryClient.setQueryData([QUERYKEY.PROFILE_ORDERS], data);
    };

    return () => {
      websocket.close(1000);
    };
  }, [queryClient, url]);
};
