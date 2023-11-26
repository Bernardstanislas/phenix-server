function generateCode(form){

tablewidth = document.TableGenerator.TableWidth.value;
tablewidthmetric = document.TableGenerator.TableWidthMetric.value;
backgroundcolor = document.TableGenerator.BackgroundColor.value;
rowcount = document.TableGenerator.RowCount.value;
columncount = document.TableGenerator.ColumnCount.value;
padding = document.TableGenerator.Padding.value;
paddingmetric = document.TableGenerator.PaddingMetric.value;
textcolor = document.TableGenerator.TextColor.value;
headercolor = document.TableGenerator.HeaderColor.value;
displaysampletext = document.TableGenerator.DisplaySampleText.checked;
borderwidth = document.TableGenerator.BorderWidth.value;
borderwidthmetric = document.TableGenerator.BorderWidthMetric.value;
bordercolor = document.TableGenerator.BorderColor.value;
borderstyle = document.TableGenerator.BorderStyle.value;
bordercollapse = document.TableGenerator.BorderCollapse.checked;

tablerows = '  <tbody>\n';
tablehead = '  <thead>\n    <tr>\n';
tableheadtext = '';
tabletext = '      <td></td>\n';

for (thisRow = 1; thisRow <= rowcount; thisRow++) {

	tablerows = tablerows + '    <tr>\n';
	
	for (thisColumn = 1; thisColumn <=  columncount; thisColumn++) {
		
		/* Header */
		if (thisRow == 1) {
			if (displaysampletext == "1") {
				tableheadtext = tableheadtext + '      <th>Header ' + thisColumn + '</th>\n';
				}
				else {
				tableheadtext = tableheadtext + '      <th></th>\n';
				}
		}		
		
		/* Normal Row */
		if (displaysampletext == "1") {
			
			tabletext = '      <td>Row ' + thisRow + ', Cell ' + thisColumn + '</td>\n';
			
			}

		tablerows = tablerows + tabletext;
	}
	tablerows = tablerows + '    </tr>\n';	
}

tablehead = tablehead + tableheadtext + '    </tr>\n  </thead>\n';
tablerows = tablerows + '  </tbody>\n';

output = '<!-- CSS Code: Place this code in the documents head (between the <head> -- </head> tags) -->\n' +
'<style>\n' +
'table.customTable {\n' +
	((tablewidth) ? '  width: ' + tablewidth + tablewidthmetric + ';\n' : '') + 
	((backgroundcolor) ? '  background-color: ' + backgroundcolor + ';\n' : '') +
	((bordercollapse) ? '  border-collapse: collapse;' + '\n' : '  border-collapse: separate;' + '\n') +
	((borderwidth) ? '  border-width: ' + borderwidth + borderwidthmetric + ';\n' : '') +
	((bordercolor) ? '  border-color: ' + bordercolor + ';\n' : '') +
	((borderstyle) ? '  border-style: ' + borderstyle + ';\n' : '') +
	((textcolor) ? '  color: ' + textcolor + ';\n' : '') +
'}\n\n' +

'table.customTable td, table.customTable th {\n' +
	((borderwidth) ? '  border-width: ' + borderwidth + borderwidthmetric + ';\n' : '') +
	((bordercolor) ? '  border-color: ' + bordercolor + ';\n' : '') +
	((borderstyle) ? '  border-style: ' + borderstyle + ';\n' : '') +
	((padding) ? '  padding: ' + padding + paddingmetric + ';\n' : '') +
'}\n\n' +

'table.customTable thead {\n' +
	((headercolor) ? '  background-color: ' + headercolor + ';\n' : '') +
'}\n' +
'</style>\n\n' +

'<table class="customTable">\n' +
tablehead +
tablerows +
'</table>\n' +
'<!-- Generated at CSSPortal.com -->\n\n';

outputhtml = '<table class="customTable">\n' +
tablehead +
tablerows +
'</table>\n' +
'<!-- Generated at CSSPortal.com -->\n\n';

outputcss = 'table.customTable {\n' +
	((tablewidth) ? '  width: ' + tablewidth + tablewidthmetric + ';\n' : '') + 
	((backgroundcolor) ? '  background-color: ' + backgroundcolor + ';\n' : '') +
	((bordercollapse) ? '  border-collapse: collapse;' + '\n' : '  border-collapse: separate;' + '\n') +
	((borderwidth) ? '  border-width: ' + borderwidth + borderwidthmetric + ';\n' : '') +
	((bordercolor) ? '  border-color: ' + bordercolor + ';\n' : '') +
	((borderstyle) ? '  border-style: ' + borderstyle + ';\n' : '') +
	((textcolor) ? '  color: ' + textcolor + ';\n' : '') +
'}\n\n' +

'table.customTable td, table.customTable th {\n' +
	((borderwidth) ? '  border-width: ' + borderwidth + borderwidthmetric + ';\n' : '') +
	((bordercolor) ? '  border-color: ' + bordercolor + ';\n' : '') +
	((borderstyle) ? '  border-style: ' + borderstyle + ';\n' : '') +
	((padding) ? '  padding: ' + padding + paddingmetric + ';\n' : '') +
'}\n\n' +

'table.customTable thead {\n' +
	((headercolor) ? '  background-color: ' + headercolor + ';\n' : '') +
'}\n';

document.getElementById('displayResult').innerHTML = output;
document.getElementById("htmlcode").textContent = outputhtml;
document.getElementById("csscode").textContent = outputcss;
Prism.highlightAll();

return output;
}

$(document).ready(function() {
   generateCode();
});