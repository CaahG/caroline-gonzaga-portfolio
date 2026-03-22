import { motion } from "motion/react";

interface ProjectVisualProps {
    title: string;
    image?: string;
}

export const ProjectVisual = ({ title, image }: ProjectVisualProps) => {
    // Simple code snippets based on common project types
    const getCodeSnippet = () => {
        if (title.toLowerCase().includes('posterstore')) {
            return [
                `test('posterstore e2e flow', async ({ page }) => {`,
                `  await page.goto('/login');`,
                `  await page.fill('#user', 'qa_tester');`,
                `  await page.click('text=Login');`,
                `  await page.click('.add-to-cart');`,
                `  await expect(page.locator('.cart-count')).toHaveText('1');`,
                `  await page.click('#checkout');`,
                `  await expect(page).toHaveURL(/.*order-success/);`,
                `});`
            ];
        }
        if (title.toLowerCase().includes('jsonplaceholder')) {
            return [
                `describe('JSONPlaceholder API Validation', () => {`,
                `  it('should validate /posts/1 structure', async () => {`,
                `    const response = await fetch('https://api/posts/1');`,
                `    const data = await response.json();`,
                `    expect(response.status).toBe(200);`,
                `    expect(data).toHaveProperty('userId');`,
                `    expect(data).toHaveProperty('title');`,
                `  });`,
                `});`
            ];
        }
        if (title.toLowerCase().includes('e-commerce') || title.toLowerCase().includes('checkout')) {
            return [
                `test('checkout flow', async ({ page }) => {`,
                `  await page.goto('/cart');`,
                `  await page.click('#checkout-btn');`,
                `  await expect(page).toHaveURL(/.*checkout/);`,
                `  await page.fill('#card', '4xxx-xxxx');`,
                `  await page.click('#place-order');`,
                `  await expect(page.locator('.success')).toBeVisible();`,
                `});`
            ];
        }
        if (title.toLowerCase().includes('tacomex') || title.toLowerCase().includes('8-bit')) {
            return [
                `test('tacomex 8-bit shop flow', async ({ page }) => {`,
                `  await page.goto('/shop');`,
                `  await page.click('text=Tacos');`,
                `  await page.click('#checkout-btn');`,
                `  await expect(page).toHaveURL(/.*checkout/);`,
                `  await page.fill('#promo', '8BIT-LOVER');`,
                `  await page.click('#complete-order');`,
                `  expect(page.locator('.pixel-success')).toBeVisible();`,
                `});`
            ];
        }
        if (title.toLowerCase().includes('api') || title.toLowerCase().includes('rest')) {
            return [
                `describe('API v1 /users', () => {`,
                `  it('should return 200 for valid auth', async () => {`,
                `    const res = await request(app)`,
                `      .get('/api/users')`,
                `      .set('Auth', \`Bearer \${token}\`);`,
                `    expect(res.status).toBe(200);`,
                `    expect(res.body).toHaveProperty('id');`,
                `  });`,
                `});`
            ];
        }
        return [
            `// Automated Scenario Baseline`,
            `const suite = new TestSuite('${title}');`,
            `suite.add(new SmokeTest());`,
            `suite.run().then(report => {`,
            `  console.log('Stability: 100%');`,
            `});`
        ];
    };

    const lines = getCodeSnippet();

    return (
        <div className="w-full h-full bg-[#0a0c10] p-6 font-mono text-[11px] relative overflow-hidden group/visual">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 qa-grid opacity-10"></div>

            {/* Background Image if available */}
            {image && (
                <div
                    className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover/visual:opacity-40"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%) contrast(150%)'
                    }}
                />
            )}

            {/* Window Controls Overlay */}
            <div className="absolute top-4 left-6 flex gap-1.5 opacity-40 group-hover/visual:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>

            <div className="mt-6 space-y-1 relative z-10">
                {lines.map((line, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="whitespace-pre"
                    >
                        <span className="text-slate-600 mr-4 select-none inline-block w-4">{idx + 1}</span>
                        <span className="text-slate-400">
                            {line.split(/(await|test|expect|it|describe|should|const|new|return)/).map((part, i) => {
                                const colors: Record<string, string> = {
                                    'await': 'text-purple-400',
                                    'test': 'text-blue-400',
                                    'it': 'text-blue-400',
                                    'describe': 'text-blue-400',
                                    'expect': 'text-primary',
                                    'should': 'text-primary',
                                    'const': 'text-purple-400',
                                    'new': 'text-purple-400',
                                    'return': 'text-purple-400'
                                };
                                return <span key={i} className={colors[part] || ''}>{part}</span>;
                            })}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Decorative pulse in the corner */}
            <div className="absolute bottom-4 right-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
                <span className="text-[10px] text-primary/50 font-bold uppercase tracking-widest">Live Suite</span>
            </div>

            {/* Scanning gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent h-1/2 w-full -translate-y-full group-hover/visual:translate-y-[200%] transition-transform duration-[2000ms] ease-linear pointer-events-none opacity-30"></div>
        </div>
    );
};
