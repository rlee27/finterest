const style = {
  overlay : {
    position        : 'fixed',
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 800,
    display         : 'flex',
    width           : '100%',
    justifyContent  : 'center',
    alignItems      : 'center',
  },
  content : {
    position        : 'fixed',
    border          : '1px solid #007EB2',
    zIndex          : 800,
    backgroundColor : '#8CC0FF',
    fontFamily      : "'Droid Sans', sans-serif",
    fontSize        : '16px',
    display         : 'flex',
    flexDirection   : 'column',
    color           : 'white',
    fontWeight      : '700',
    maxWidth        : '80%',
    maxHeight       : '80%',
  }
};

export default style;
