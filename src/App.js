import Table from "./components/collapse/table";

function App() {

const headers = [
  {
    sorting: 'false',
    value: 'Name',
  },
  {
    sorting: 'false',
    value: 'Type',
  },
  {
    sorting: 'false',
    value: 'Owner',
  },
  {
    sorting: 'false',
    value: 'Access Level',
  },
  {
    sorting: 'false',
    value: 'Date',
  },
  {
    sorting: 'false',
    value: '',
  },
  {
    sorting: 'false',
    value: '',
  },
];

const rows = [
  {
    id: 1,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Admin',
    date: '<request date>',
    button: 'share',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'None',
    date: '<request date>',
    button: 'request access',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 3,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Read',
    date: '<request date>',
    button: 'share',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 4,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Admin',
    date: '<request date>',
    button: 'share',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 5,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'None',
    date: '<request date>',
    button: 'request access',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 6,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Read',
    date: '<request date>',
    button: 'share',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 7,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Admin',
    date: '<request date>',
    button: 'share',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 8,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'None',
    date: '<request date>',
    button: 'request access',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
  {
    id: 9,
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Read',
    date: '<request date>',
    button: 'share',
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  }
];
  const props= {
    headers,
    rows,
    rowsPerPage: 5,
    showFirstButton: true,
    showLastButton: true,
    pagination: true,
    collapsible: true,
    selecting: false,
  }
  return (
    <div className="App">
      <header className="App-header">
        <Table {...props} />
      </header>
    </div>
  );
}

export default App;
