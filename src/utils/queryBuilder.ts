import { config } from "../config";

export function buildUrl(path: string, props: Record<string, string | number>)  {
    const hasFirstSlash = path.indexOf('/') === 0;
    const url = config.url + (hasFirstSlash ? '' : '/') + path + '?origin='  + config.origin;
    let query = '&';
    for(const key in props) {
      query += encodeURIComponent(key) + '=' + encodeURIComponent(props[key]) + '&'; 
    }
    console.log('URL', url + query.replace(/&$/g, ''));
    return url + query.replace(/&$/g, '');
}