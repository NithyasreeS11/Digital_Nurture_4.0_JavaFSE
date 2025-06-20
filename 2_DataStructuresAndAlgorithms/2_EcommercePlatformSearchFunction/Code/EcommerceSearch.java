import java.util.*;
class Product{
    int pid;
    String pname;
    String pcategory;

    public Product(int pid, String pname, String pcategory){
        this.pid = pid;
        this.pname = pname;
        this.pcategory = pcategory;
    }
    public String toString(){
        return pid+"-"+pname+"("+pcategory+")";
    }
}
public class ECommerceSearch {
    public static Product linearSearch(Product[] pro, String name){
        for(Product p : pro){
            if(p.pname.equalsIgnoreCase(name)){
                return p;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] pro, String name){
        int low = 0, high = pro.length-1;
        while(low<=high){
            int mid = (low+high)/2;
            int cmp = pro[mid].pname.compareToIgnoreCase(name);
            if(cmp==0){
                return pro[mid];
            }
            else if(cmp<0){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args){
        Product[] pro = {
            new Product(101,"Keyboard","Electronics"),
            new Product(102,"Book","Education"),
            new Product(104,"Mouse","Electronics"),
            new Product(110,"Soap","PersonalCare"),
            new Product(112,"Shampoo","PersonalCare")
        };
        System.out.println("Linear Search");
        Product lans = linearSearch(pro,"Book");
        System.out.println(lans==null ? "not found" : lans);
        Arrays.sort(pro,Comparator.comparing(p->p.pname.toLowerCase()));
        System.out.println("Binary Search");
        Product bans = binarySearch(pro,"book");
        System.out.println(bans==null ? "not found" : bans);
    }
}
