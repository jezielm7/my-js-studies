function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

function awaitFc(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Error');
        return;
      }

      resolve(msg.toLocaleUpperCase() + ' - Promise accepted');
      return;
    }, time);
  });
};

async function execute() {
  try {
    const phase1 = awaitFc('Phase 1', 1000);
    console.log(phase1);

    setTimeout(() => {
      console.log('This promise was pending:', phase1);
    }, 1100);

    const phase2 = await awaitFc('Phase 2', rand());
    console.log(phase2);

    const phase3 = await awaitFc('Phase 3', rand());
    console.log(phase3);

    console.log('Ends in phase:', phase3);
  } catch (err) {
    console.log(err);
  }
}
execute();


// Promise States

// Pending -> Pendente
// FullFilled -> Resolvida
// Rejected -> Rejeitada