import { Component } from 'react';

interface Props {
  myArr: { id: number; name: string; age: number }[];
}

class UsersList extends Component<Props> {
  render() {
    const { myArr } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {myArr.map((user, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#3e3e3e',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '340px',
              height: '100px',
              margin: '15px 40px',
              borderRadius: '5px',
            }}
          >
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
