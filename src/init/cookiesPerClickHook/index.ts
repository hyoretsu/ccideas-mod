const cookiesPerClickHookContent = (cookiesPerClick: number): number => {
 let cpc = cookiesPerClick;

 if (Game.Has('Misfortune #604')) {
  cpc += Game.cookiesPs * 0.01;
 }

 return cpc;
};

export default cookiesPerClickHookContent;
