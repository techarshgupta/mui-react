import { Button, Chip, Link, Stack } from "@mui/material";
import Table from "./components/collapse/table";
import Details from "./components/data/details";

export const newHeaders = [
  {
    id: 1,
    sorting: 'false',
    value: 'Name',
    key: 'dataset'
  },
  {
    id: 2,
    sorting: 'false',
    value: 'Type',
    key: 'type'
  },
  {
    id: 3,
    sorting: 'false',
    value: 'Owner',
    key: 'owner'
  },
  {
    id: 4,
    sorting: 'false',
    value: 'Access Level',
    key: 'access'
  },
  {
    id: 5,
    sorting: 'false',
    value: 'Date',
    key: 'date'
  },
  {
    id: 6,
    sorting: 'false',
    value: '',
    key: 'button'
  },
];

export const newRows = [
  {
    id: 1,
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="Admin" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        Share
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="None" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        request access
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="Read" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        Share
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="Admin" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        Share
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="None" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        request access
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="Read" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        Share
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="Admin" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        Share
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="None" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        request access
      </Button>,
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
    dataset:
      <Stack direction="column">
        <Link
          href={`https://www.google.com/search?q=`}
          target="_blank"
        >
          dev_+c360_cons_test_equs_file1
        </Link>
        <div>decription: sample employee details for integration test</div>
      </Stack>,
    description: '<decription: sample employee details for integration test>',
    type: '<data entity type>',
    owner:
      <Link
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        requester name
      </Link>,
    access: <Chip size="small" label="Read" />,
    date: '<request date>',
    button:
      <Button
        sx={{
          width: 200,
          border: "2px solid black",
          color: "black",
        }}
        variant="outlined"
        href={`https://www.google.com/search?q=`}
        target="_blank"
      >
        Share
      </Button>,
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
    headers: newHeaders,
    rows: newRows,
    rowsPerPage: 5,
    showFirstButton: true,
    showLastButton: true,
    pagination: true,
    collapsible: true,
    selecting: true,
    actions: true,
    sorting: true,
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <Table {...props} />
      </header> */}
      <Details />
    </div>
  );
}

export default App;
