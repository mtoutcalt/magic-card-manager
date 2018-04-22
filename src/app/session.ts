export class Session {

  static set(key:string, value:any) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  static get(key:string) {
      if(Session.has(key)) return JSON.parse(window.sessionStorage[key])
      return null;
  }

  static has(key:string) {
      if(window.sessionStorage[key]) return true;
      return false;
  }

  static remove(key:string) {
      window.sessionStorage.removeItem(key);
  }

}
