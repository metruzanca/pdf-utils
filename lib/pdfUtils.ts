import PDFMerger from 'pdf-merger-js';

export async function merge(pdfArray: string[], outputName = 'output.pdf') {
  const merger = new PDFMerger();
  pdfArray.forEach(pdf => merger.add(pdf))
  await merger.save(outputName);
}