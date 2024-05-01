import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    root: './src',
    base: '/coca/',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                about: './src/about.html',
                blog: './src/blog.html',
                pricing: './src/pricing.html',
                contact: './src/contact.html',
                //posts
                howWePerformLongRunningTasksUsingAWSservices:
                    './src/posts/how-we-perform-long-running-tasks-using-aws-services.html',
                howToAskWhenDoingUserResearch:
                    './src/posts/how-to-ask-when-doing-user-research.html',
                practiceMakingUserFlow:
                    './src/posts/practice-making-user-flow.html',
                overviewOfTheDesignPrinciples:
                    './src/posts/overview-of-the-design-principles.html',
                usingGridInWebsiteDesign:
                    './src/posts/using-grid-in-website-design.html',
                whatMakesAnAuthenticEmployeeProfileAndWhyDoesItMatter:
                    './src/posts/what-makes-an-authentic-employee-profile-and-why-does-it-matter.html',
                howToBuildAKaylenRelationshipWithAGoodCompany:
                    './src/posts/how-to-build-a-kaylen-relationship-with-a-good-company.html',
                layoutExplorationSimpleExerciseButBigEffect:
                    './src/posts/layout-exploration-simple-exercise-but-big-effect.html',
                webflowBreakTheCodingBarrier:
                    './src/posts/webflow-break-the-coding-barrier.html',
                listOfUXDesignerPortfolioCaseStudiesWhereYouCanMakeMoney:
                    './src/posts/list-of-ux-designer-portfolio-case-studies-where-you-can-make-money.html',
                skyrocketingInTheDesigningCareerWhyNot:
                    './src/posts/skyrocketing-in-the-designing-career-why-not.html',
                elementsThatMayBeMissedWhenDesigningTheUI:
                    './src/posts/elements-that-may-be-missed-when-designing-the-ui.html',
            },
            output: {
                assetFileNames: '[name].[ext]',
            },
        },
    },
    plugins: [
        injectHTML(),
        ViteMinifyPlugin(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
});
