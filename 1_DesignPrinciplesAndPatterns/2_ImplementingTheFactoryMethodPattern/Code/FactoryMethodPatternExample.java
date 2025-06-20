interface Document{
    public void open();
}
class WordDocument implements Document{
    public void open(){
        System.out.println("Word Document class");
    }
}
class PdfDocument implements Document{
    public void open(){
        System.out.println("Pdf Document class");
    }
}
class ExcelDocument implements Document{
    public void open(){
        System.out.println("Excel Document class");
    }
}
abstract class DocumentFactory{
    abstract public Document createDocument();
}
class WordDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new WordDocument();
    }
}
class PdfDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new PdfDocument();
    }
}
class ExcelDocumentFactory extends DocumentFactory{
    public Document createDocument(){
        return new ExcelDocument();
    }
}
class FactoryMethodPatternExample{
    public static void main(String[] args){
        WordDocumentFactory word = new WordDocumentFactory();
        Document wobj = word.createDocument();
        wobj.open();
        PdfDocumentFactory pdf = new PdfDocumentFactory();
        Document pobj = pdf.createDocument();
        pobj.open();
        ExcelDocumentFactory excel = new ExcelDocumentFactory();
        Document eobj = excel.createDocument();
        eobj.open();
    }
}
