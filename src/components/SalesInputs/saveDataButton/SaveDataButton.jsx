
import '../sendButton/sendButton.css'
import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const SaveDataButton = ({ csvData, fileName, disabledState }) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }


    return (
        <button className="sendButton saveButton" type="button" onClick={(e) => exportToCSV(csvData, fileName)} disabled={disabledState}>Descargar excel</button>
    )

}