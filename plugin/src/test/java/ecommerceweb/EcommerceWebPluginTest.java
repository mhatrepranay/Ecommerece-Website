/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package ecommerceweb;

import org.gradle.testfixtures.ProjectBuilder;
import org.gradle.api.Project;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * A simple unit test for the 'ecommerceweb.greeting' plugin.
 */
class EcommerceWebPluginTest {
    @Test void pluginRegistersATask() {
        // Create a test project and apply the plugin
        Project project = ProjectBuilder.builder().build();
        project.getPlugins().apply("ecommerceweb.greeting");

        // Verify the result
        assertNotNull(project.getTasks().findByName("greeting"));
    }
}
