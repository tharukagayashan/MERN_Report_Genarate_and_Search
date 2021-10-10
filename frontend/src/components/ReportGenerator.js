import jsPDF from 'jspdf';
import "jspdf-autotable";


const GeneratePdf = user =>{
    
    const doc = new jsPDF();

    const tableColumn = ["Name","Age","District","Description"];
    const tableRows = [];

    user.forEach(user => {
        const userData = [
            user.name,
            user.age,
            user.district,
            user.description
        ]

        tableRows.push(userData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("List of Users",14,15);
    doc.save(`User_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;


