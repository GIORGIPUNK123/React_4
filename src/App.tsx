import React, { Component } from 'react';
import UsersList from './components/UsersList';

interface User {
  id: number;
  name: string;
  age: number;
}

const generateUsers = async () => {
  return [
    {
      id: 1,
      name: 'Alex Johnson',
      age: 25,
    },
    {
      id: 2,
      name: 'Benjamin Lee',
      age: 32,
    },
    {
      id: 3,
      name: 'Catherine Davis',
      age: 28,
    },
    {
      id: 4,
      name: 'Daniel Brown',
      age: 30,
    },
    {
      id: 5,
      name: 'Ella Martinez',
      age: 27,
    },
    {
      id: 6,
      name: 'Finnegan Campbell',
      age: 31,
    },
    {
      id: 7,
      name: 'Grace Taylor',
      age: 29,
    },
    {
      id: 8,
      name: 'Harrison Mitchell',
      age: 26,
    },
    {
      id: 9,
      name: 'Isabelle Robinson',
      age: 33,
    },
    {
      id: 10,
      name: 'Jacob Perez',
      age: 24,
    },
  ];
};

class App extends Component<{}, { users: User[]; show: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      users: [],
      show: true,
    };
    const { users, show } = this.state;
  }
  componentDidMount = () => {
    generateUsers().then((res) => {
      this.setState(
        {
          users: res,
        },
        () => {
          document.title = `${this.state.users.length} users Left`;
        }
      );
    });
  };

  componentWillUnmount = () => {
    document.title = `test`;
  };

  deleteRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * this.state.users.length);
    this.setState(
      (prevState) => ({
        users: prevState.users.filter((_, index) => index !== randomIndex),
      }),
      () => {
        document.title = `${this.state.users.length} users Left`;
      }
    );
  };

  render() {
    const { users, show } = this.state;

    return (
      <>
        <div className='App'>
          <div>
            <h1
              style={{
                textAlign: 'center',
                marginTop: '30px',
                marginBottom: '50px',
              }}
            >
              Hi
            </h1>
            {show ? <UsersList myArr={users} /> : null}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                style={{
                  marginRight: '25px',
                  marginTop: '55px',
                  width: '120px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                }}
                onClick={() => {
                  this.setState((prevState) => ({
                    show: !prevState.show,
                  }));
                }}
              >
                <h3> {show ? 'Hide List' : 'Show List'} </h3>
              </button>
              <button
                style={{
                  marginLeft: '25px',
                  marginTop: '55px',
                  width: '250px',
                  height: '75px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
                onClick={this.deleteRandomUser}
              >
                <h3>Delete Random User</h3>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
