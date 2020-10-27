import request from '@/utils/request'

export async function queryViews() {
  return request('/api/views');
}

export async function postViews(params) {
  return request('/api/views', {
    method: 'POST',
    data: params,
  });
}
