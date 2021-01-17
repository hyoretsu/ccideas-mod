const cpsHookContent = (originalCps: number): number => {
 let cps = originalCps;

 if (Game.Has('Misfortune #600')) {
  cps *= 1.01;
 }
 if (Game.Has('Misfortune #601')) {
  cps *= 1.06;
 }

 return cps;
};

export default cpsHookContent;
