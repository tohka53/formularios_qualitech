import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-formintbuss',
  templateUrl: './formintbuss.component.html',
  styleUrls: ['./formintbuss.component.css']
})
export class FormintbussComponent {

  saveForm() {
    alert('Guardando formulario...');
    console.log('Función saveForm ejecutada');
  }

  exportToPDF() {
    alert('Iniciando exportación a PDF');
    console.log('Función exportToPDF ejecutada');
    
    const element = document.getElementById('form-container');
    if (!element) {
      alert('No se encontró el elemento del formulario');
      return;
    }

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('formulario-business.pdf');
      alert('PDF generado correctamente');
    }).catch(error => {
      console.error('Error al generar PDF:', error);
      alert('Error al generar PDF');
    });
  }
}