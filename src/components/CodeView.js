import React from 'react';


const style = {
  backgroundColor: '#F6F6F6',
  border: '#D3D3D3 1px solid',
  padding: '10px'
}

class CodeView extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}


export default CodeView;
