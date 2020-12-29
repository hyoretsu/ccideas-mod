const checkHookContent = [
 (): void => {
  if (Game.Has('Misfortune cookies')) {
   Game.Unlock([
    'Misfortune #501',
    'Misfortune #502',
    'Misfortune #503',
    'Misfortune #504',
    'Misfortune #505',
    'Misfortune #506',
    'Misfortune #507',
    'Misfortune #508',
    'Misfortune #509',
    'Misfortune #510',
    'Misfortune #511',
    'Misfortune #512',
    'Misfortune #513',
    'Misfortune #514',
    'Misfortune #515',
    'Misfortune #516',
    'Misfortune #517',
    'Misfortune #518',
    'Misfortune #600',
    'Misfortune #601',
    'Misfortune #602',
    'Misfortune #603',
    'Misfortune #604',
    'Misfortune #666',
   ]);
  }
 },
 (): void => {
  Game.RefreshStore();
 },
];

export default checkHookContent;
