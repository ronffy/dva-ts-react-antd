/**
 * 添加displayName
 * @author ronffy
 */

export default function getDisplayName(WarpedComponent: any): string {
  return (WarpedComponent).displayName || (WarpedComponent).name || 'Component';
}
