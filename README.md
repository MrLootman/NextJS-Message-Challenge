### That is the question

      // MA VERSION
      // const unusedIndices = [];

      // for (let i = 0; i < ANSWERS.length; i++) {
      //   if (!usedIndices.has(i)) {
      //     unusedIndices.push(i);
      //   }
      // }

      // VERSIONS PROPOSEES PAR INTELLIGENCE ARTIFICIELLE :
      // const unusedIndices = ANSWERS
      //   .map((_, i) => i)
      //   .filter(i => !usedIndices.has(i));

      // const unusedIndices = ANSWERS.reduce<number[]>((acc, _, i) => {
      //   !usedIndices.has(i) && acc.push(i);
      //   return acc;
      // }, []);

      // const unusedIndices = ANSWERS.filter((el, i) => {
      //   return !usedIndices.has(i);
      // });

      // let nextIndex: number;

      // if (unusedIndices.length === 0) {
      //   setUsedIndices(new Set());
      //   nextIndex = Math.floor(Math.random() * ANSWERS.length);
      // } else {
      //   nextIndex =
      //     unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
      // }

      // setUsedIndices((prev) => new Set(prev).add(nextIndex));
      // setCurrentAnswer(ANSWERS[nextIndex]);
