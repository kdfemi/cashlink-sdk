import { config } from "../config";

export function buildUrl(path: string, props: Record<string, string | number> = {})  {
    const hasFirstSlash = path.indexOf('/') === 0;
    const url = (localStorage.getItem('CASH_LINK_ENV') === 'dev' ? config.staging_url : config.url) + (hasFirstSlash ? '' : '/') + path + '?origin='  + config.origin;
    let query = '&';
    for(const key in props) {
      query += encodeURIComponent(key) + '=' + encodeURIComponent(props[key]) + '&'; 
    }
    return url + query.replace(/&$/g, '');
}