import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        // Arrange: Initialize before each test
        calc = new Calculator();
        System.out.println("Setup completed.");
    }

    @After
    public void tearDown() {
        // Clean up (optional)
        calc = null;
        System.out.println("Teardown completed.");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calc.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        // Act
        int result = calc.subtract(10, 5);

        // Assert
        assertEquals(5, result);
    }
}
