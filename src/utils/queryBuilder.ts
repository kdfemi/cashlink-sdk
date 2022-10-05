import { config } from "../config";

/**
 * @ignore
 * Build Cashlink url 
 * @param path url path to point to, excluding hostname
 * @param props path param and query param
 * @returns url with path param value and query param
 */
export function buildUrl(path: string, props: Record<string, string | number> = {})  {
    const hasFirstSlash = path.indexOf('/') === 0;
    let query = '&';
    for(const key in props) {
      if(path.includes(`:${key}`)) {
        path = path.replace(`:${key}`, encodeURIComponent(props[key]));
      } else {
        query += encodeURIComponent(key) + '=' + encodeURIComponent(props[key]) + '&'; 
      }
    }
    const url = (localStorage.getItem('CASH_LINK_ENV') === 'dev' ? config.staging_url : config.url) + (hasFirstSlash ? '' : '/') + path + '?origin='  + config.origin;
    return url + query.replace(/&$/g, '');
}