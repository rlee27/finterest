const style = {
  overlay : {
    position        : 'fixed',
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 800,
    display         : 'flex',
    height          : '100%',
    width           : '100%',
    justifyContent  : 'center',
    alignItems      : 'center',
  },
  content : {
    position        : 'fixed',
    top             : 'unset',
    left            : 'unset',
    right           : 'unset',
    bottom          : 'unset',
    border          : '1px solid #007EB2',
    zIndex          : 800,
    backgroundColor : '#F5FFFF',
    fontFamily      : "'Droid Sans', sans-serif",
    fontSize        : '16px',
    display         : 'flex',
    flexDirection   : 'column',
    color           : '#5f5f5f',
    fontWeight      : '700',
  }
};

export default style;
