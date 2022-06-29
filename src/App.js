import Table1 from "./components/table1";

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
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Admin',
    date: '<request date>',
    button: 'share',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'None',
    date: '<request date>',
    button: 'request access',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Read',
    date: '<request date>',
    button: 'share',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Admin',
    date: '<request date>',
    button: 'share',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'None',
    date: '<request date>',
    button: 'request access',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Read',
    date: '<request date>',
    button: 'share',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Admin',
    date: '<request date>',
    button: 'share',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'None',
    date: '<request date>',
    button: 'request access',
  },
  {
    dataset: 'dev_+c360_cons_test_equs_file1',
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner: '<requester name>',
    access: 'Read',
    date: '<request date>',
    button: 'share',
  }
];
  const props= {
    headers,
    rows,
    rowsPerPage: 5,
    showFirstButton: true,
    showLastButton: true,
    pagination: true,
  }
  return (
    <div className="App">
      <header className="App-header">
        <Table1 {...props} />
      </header>
    </div>
  );
}

export default App;
