import ReactDOM from 'react-dom/client';
import App from './App'
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
var cors = require('cors')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// Amplify.configure(awsExports);
