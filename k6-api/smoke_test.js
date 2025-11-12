import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://srv946485.hstgr.cloud:3000/api/inventory');
  sleep(1);
}
