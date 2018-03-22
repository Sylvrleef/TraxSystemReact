import React, {Component} from 'react';

class RequestTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchase Request #</th>
                            <th>Purchase Order #</th> 
                            <th>Vendor</th>
                            <th># of Items</th>
                            <th>Total Price</th> 
                            <th>Date Needed</th>
                            <th>Date Completed</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>PR546</td>
                            <td></td> 
                            <td>Office Depot</td>
                            <td>8</td>
                            <td>$54.98</td> 
                            <td>04/12/2018</td>
                            <td></td>
                            <td>Authorizing</td> 
                        </tr>
                        <tr>
                            <td>PR784</td>
                            <td>PO784</td> 
                            <td>Granger</td>
                            <td>2</td>
                            <td>$120.46</td> 
                            <td>03/12/2018</td>
                            <td>03/02/2018</td>
                            <td>Completed</td> 
                        </tr>
                        <tr>
                            <td>PR349</td>
                            <td></td> 
                            <td>Office Depot</td>
                            <td>1</td>
                            <td>$79.87</td> 
                            <td>04/01/2018</td>
                            <td>03/20/2018</td>
                            <td>Completed</td> 
                        </tr>
                        <tr>
                            <td>PR980</td>
                            <td></td> 
                            <td>Dell</td>
                            <td>10</td>
                            <td>$17,000</td> 
                            <td>05/01/2018</td>
                            <td></td>
                            <td>Authorizing</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RequestTable;