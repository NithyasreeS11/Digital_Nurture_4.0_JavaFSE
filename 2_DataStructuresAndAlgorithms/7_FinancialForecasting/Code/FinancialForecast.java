public class FinancialForecast {
    public static double futureValue(double amount, double growthRate, int years) {
        if (years == 0) 
            return amount;
        return futureValue(amount, growthRate, years - 1) * (1 + growthRate);
    }
    public static void main(String[] args) {
        double initialAmount = 10000;
        double annualGrowthRate = 0.08;
        int forecastYears = 5;
        double future = futureValue(initialAmount, annualGrowthRate, forecastYears);
        System.out.printf("Future value after %d years: Rs %.2f\n", forecastYears, future);
    }
}

