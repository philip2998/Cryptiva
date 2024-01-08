import { useState, useEffect } from 'react';

const Typewriter = (toRotate, period) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(130);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(130);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(130);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [
    text,
    delta,
    loopNum,
    isDeleting,
    setDelta,
    setIndex,
    setIsDeleting,
    setLoopNum,
    period,
    toRotate,
  ]);

  return { text, index };
};

export default Typewriter;
