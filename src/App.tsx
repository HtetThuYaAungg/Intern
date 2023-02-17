// import * as React from 'react';

// import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

// class App extends React.PureComponent<{}, IGridProps> {

//     private source: IGridProps['source'] = {
//         localdata:
//             [
//                 ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
//                 ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
//                 ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
//                 ['Thomas Hardy', 'Sales Representative', 'London', 'UK'],
//                 ['Christina Berglund', 'Order Administrator', 'Lule', 'Sweden'],
//                 ['Hanna Moos', 'Sales Representative', 'Mannheim', 'Germany'],
//                 ['Frdrique Citeaux', 'Marketing Manager', 'Strasbourg', 'France'],
//                 ['Martn Sommer', 'Owner', 'Madrid', 'Spain'],
//                 ['Owner', 'Marseille', 'France'],
//                 ['Elizabeth Lincoln', 'Accounting Manager', 'Tsawassen', 'Canada'],
//                 ['Victoria Ashworth', 'Sales Representative', 'London', 'UK'],
//                 ['Patricio Simpson', 'Sales Agent', 'Buenos Aires', 'Argentina'],
//                 ['Francisco Chang', 'Marketing Manager', 'Mxico D.F.', 'Mexico'],
//                 ['Yang Wang', 'Owner', 'Bern', 'Switzerland'],
//                 ['Pedro Afonso', 'Sales Associate', 'Sao Paulo', 'Brazil'],
//                 ['Elizabeth Brown', 'Sales Representative', 'London', 'UK'],
//                 ['Sven Ottlieb', 'Order Administrator', 'Aachen', 'Germany'],
//                 ['Janine Labrune', 'Owner', 'Nantes', 'France'],
//                 ['Ann Devon', 'Sales Agent', 'London', 'UK'],
//                 ['Roland Mendel', 'Sales Manager', 'Graz', 'Austria']
//             ],
//         datafields:
//             [
//                 { name: 'ContactName', type: 'string', map: '0' },
//                 { name: 'Title', type: 'string', map: '1' },
//                 { name: 'City', type: 'string', map: '2' },
//                 { name: 'Country', type: 'string', map: '3' }
//             ],
//         datatype: 'array'
//     };

//     private columns: IGridProps['columns'] =
//         [
//             { text: 'Contact Name', datafield: 'ContactName', width: 240 },
//             { text: 'Contact Title', datafield: 'Title', width: 240 },
//             { text: 'City', datafield: 'City', width: 150 },
//             { text: 'Country', datafield: 'Country' }
//         ];

//     constructor(props: {}) {
//         super(props);

//         this.state = {
//             columns: this.columns,
//             source: new jqx.dataAdapter(this.source)
//         };
//     }

//     public render() {
//         return (
//             <JqxGrid
//                 width={850} source={this.state.source} columns={this.state.columns}
//                 pageable={true} autoheight={true} sortable={true} theme={'material-purple'}
//                 altrows={true} enabletooltips={true} editable={true}
//             />
//         );
//     }
// }

// export default App;

import * as React from 'react';
import './App.css'
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
class App extends React.PureComponent<{}, IGridProps> {
    private myGrid = React.createRef<JqxGrid>();
    private myWindow = React.createRef<JqxWindow>();
    private subjectcode = React.createRef<JqxInput>();
    private description = React.createRef<JqxInput>();
    private module = React.createRef<JqxInput>();
    // private quantity = React.createRef<JqxNumberInput>();
    // private price = React.createRef<JqxNumberInput>();
    private selectedCell = React.createRef<HTMLSpanElement>();
    private editrow: number = -1;
   
    constructor(props: {}) {
        super(props);
        
        this.saveBtn = this.saveBtn.bind(this);
        this.cancelBtn = this.cancelBtn.bind(this);
        
        const source: any = {
            datafields: [
                { name: 'subjectcode', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'module', type: 'string' },
            ],
            datatype: 'array',
            localdata: [
                { subjectcode: '501', description: 'Operating System', module: 'Exam Module' },
                { subjectcode: '502', description: 'Artificial Intelligent', module: 'Exam Module' },
                { subjectcode: '503', description: 'Maths', module: 'Exam Module' },
                { subjectcode: '504', description: 'English', module: 'Exam Module' },
                { subjectcode: '505', description: 'Data Structure', module: 'Exam Module' },
                { subjectcode: '601', description: 'Security', module: 'Exam Module' },
                { subjectcode: '602', description: 'Algorithm', module: 'Exam Module' },
                { subjectcode: '603', description: 'Java', module: 'Exam Module' },
                { subjectcode: '604', description: 'Javascript', module: 'Exam Module' },
                { subjectcode: '605', description: 'Myanmar', module: 'Exam Module' },
                { subjectcode: '607', description: 'Physics', module: 'Exam Module' },
                { subjectcode: '608', description: 'SoftwareLifeCycle', module: 'Exam Module' },
                { subjectcode: '401', description: 'C++', module: 'Exam Module' },
                { subjectcode: '402', description: 'PythonProgramming', module: 'Exam Module' },
                { subjectcode: '403', description: 'C#', module: 'Exam Module' },
                { subjectcode: '404', description: 'ReactJS', module: 'Exam Module' },
                { subjectcode: '405', description: 'VueJS', module: 'Exam Module' },
                { subjectcode: '301', description: 'PHP', module: 'Exam Module' },
                { subjectcode: '302', description: 'Laravel', module: 'Exam Module' },
                { subjectcode: '303', description: 'NodeJS', module: 'Exam Module' },
                { subjectcode: '304', description: 'DBMS', module: 'Exam Module' },
                
                               
                            ],
        };
        this.state = {
            columns: [
                { text: 'Subject_Code', datafield: 'subjectcode', width: 200 },
                { text: 'Description', datafield: 'description', width: 600 },
                { text: 'Module', datafield: 'module', width: 300},
                // { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
                // { text: 'Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                {
                    buttonclick: (row: number): void => {
                        // get the data and append in to the inputs
                        this.editrow = row;
                        const dataRecord = this.myGrid.current!.getrowdata(this.editrow);
                        this.subjectcode.current!.val(dataRecord.subjectcode);
                        this.description.current!.val(dataRecord.description);
                        this.module.current!.val(dataRecord.module);
                        // this.quantity.current!.setDecimal(dataRecord.quantity);
                        // this.price.current!.setDecimal(dataRecord.price);
                        // show the popup window.
                        this.myWindow.current!.open();
                    },
                    cellsrenderer: (): string => {
                        return 'Edit';
                    },
                    columntype: 'button', datafield: 'Edit', text: 'Edit'
                },
                {
                    buttonclick: (row: number): void => {
                        // get the data and append in to the inputs
                        const selectedrowindex = this.myGrid.current!.getselectedrowindex();
                        const rowscount = this.myGrid.current!.getdatainformation().rowscount;
                        if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount!)) {
                            const id = this.myGrid.current!.getrowid(selectedrowindex);
                            this.myGrid.current!.deleterow(id);
                        }
                    },
                    cellsrenderer: (): string => {
                        return 'Delete';
                    },
                    columntype: 'button', datafield: 'Dlete', text: 'Delete'
                }

            ],
            source: new jqx.dataAdapter(source)
        }
    }
    public render() {

      

        return (
            <div>
                <h2 style={{marginTop:50}}>Exam Subject List</h2> 
                <JqxGrid style={{marginTop:10}} ref={this.myGrid} className="grid" filterable={true} sortable={true} selectionmode={'checkbox'}
                    // @ts-ignore
                    width={1260}  source={this.state.source} pageable={true}
                    autoheight={true} columns={this.state.columns}  />
                <JqxWindow ref={this.myWindow} width={310} height={170} resizable={false}
                    isModal={false} autoOpen={false} modalOpacity={'0.01'} position={{ x: 500, y: 180 }}>
                    <div>Edit</div>
                    <div style={{ overflow: 'hidden' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>Subject_Code</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.subjectcode} width={200} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Description</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.description} width={200} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Module</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.module} width={200} height={23} />
                                        
                                    </td>
                                    
                                </tr>
                                {/* <tr>
                                    <td align={'right'}>Quantity:</td>
                                    <td align={'left'}>
                                        <JqxNumberInput ref={this.quantity}
                                            width={150} height={23} decimalDigits={0}
                                            min={0} spinButtons={true} spinMode={'simple'} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Price:</td>
                                    <td align={'left'}>
                                        <JqxNumberInput ref={this.price}
                                            width={150} height={23} symbol={'$'}
                                            min={0} spinButtons={true} spinMode={'simple'} />
                                    </td>
                                </tr> */}
                                <tr>
                                    <td align={'right'} />
                                    <td style={{ paddingTop: '10px' }} align={'right'}>
                                        <JqxButton style={{ display: 'inline-block', marginRight: '5px' }} onClick={this.saveBtn} width={50}>
                                            Save
                                        </JqxButton>
                                        <JqxButton style={{ display: 'inline-block', marginRight: '5px' }} onClick={this.cancelBtn} width={50}>
                                            Cancel
                                        </JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                     
                    </div>
                    
                </JqxWindow>
                
                
            </div>
            
        );
    }
    private saveBtn(): void {
        if (this.editrow >= 0) {
            const row = {
                subjectcode: this.subjectcode.current!.getOptions('value'),
                description: this.description.current!.getOptions('value'),
                module: this.module.current!.getOptions('value'),
                // productname: this.product.current!.getOptions('value'),
                // quantity: this.quantity.current!.getDecimal()
            };
            const rowID = this.myGrid.current!.getrowid(this.editrow);
            this.myGrid.current!.updaterow(rowID, row);
            this.myWindow.current!.hide();
        } 
    }

    

    private cancelBtn(): void {
        this.myWindow.current!.hide();
    }

  
}
export default App;