class Logger{
    private static Logger lg;
    private Logger(){
        System.out.println("You are in Logger");
    }
    public static Logger get(){
        if(lg==null){
            lg = new Logger();
        }
        return lg;
    }
}
public class SingletonPatternExample {
    public static void main(String[] args){
        Logger lg1 = Logger.get();
        Logger lg2 = Logger.get();
        if(lg1==lg2){
            System.out.print("Singleton patter implemented successfully");
        }
        else{
            System.out.print("Singleton pattern is not implemented");
        }
    }
}
