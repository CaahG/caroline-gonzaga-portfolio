import { motion } from "motion/react";

interface ProjectVisualProps {
    title: string;
    image?: string;
}

export const ProjectVisual = ({ title, image }: ProjectVisualProps) => {
    // Simple code snippets based on common project types
    const getCodeSnippet = () => {
        if (title.toLowerCase().includes('xbri')) {
            return [
                `describe('XBri API - User CRUD', () => {`,
                `  test('should create user', async () => {`,
                `    const res = await axios.post('/users', newUser);`,
                `    expect(res.status).toBe(201);`,
                `    expect(res.data).toHaveProperty('id');`,
                `  });`,
                `  test('should find user by id', async () => {`,
                `    const res = await axios.get(\`/users/\${id}\`);`,
                `    expect(res.status).toBe(200);`,
                `  });`,
                `});`
            ];
        }
        if (title.toLowerCase().includes('devio')) {
            return [
                `test('devio: positive registration', async ({ page }) => {`,
                `  await page.goto('/register');`,
                `  await fillRegistrationForm(page, validData);`,
                `  await page.click('#submit-btn');`,
                `  await expect(page.locator('.success')).toBeVisible();`,
                `});`,
                `test('devio: negative scenario (bug identified)', async ({ page }) => {`,
                `  await page.goto('/register');`,
                `  await page.click('#submit-btn');`,
                `  // Should show validation but 🐞 found here`,
                `  expect(page.locator('.error')).toBeVisible();`,
                `});`
            ];
        }
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
        <div className="w-full h-full bg-[#f8f5ff] font-mono text-[11px] relative overflow-hidden group/visual flex flex-col">
            {/* Editor title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#ede9fe] border-b border-[#ddd6fe] shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70"></div>
                </div>
                <span className="text-[10px] text-[#9068b8] ml-2 select-none">
                    {lines[0]?.slice(0, 28)}…
                </span>
            </div>

            {/* Background Image overlay if available */}
            {image && (
                <div
                    className="absolute inset-0 z-0 opacity-5 transition-opacity group-hover/visual:opacity-10"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}

            {/* Code lines */}
            <div className="flex-1 p-4 space-y-0.5 relative z-10 overflow-hidden">
                {lines.map((line, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                        className="whitespace-pre flex gap-3"
                    >
                        <span className="text-[#c4b5fd] select-none w-4 text-right shrink-0">{idx + 1}</span>
                        <span className="text-[#4a2d80]">
                            {line.split(/(await|test|expect|it\b|describe|should|const|new\b|return)/).map((part, i) => {
                                const colors: Record<string, string> = {
                                    'await':    'text-[#7c3aed] font-semibold',
                                    'const':    'text-[#7c3aed] font-semibold',
                                    'new':      'text-[#7c3aed] font-semibold',
                                    'return':   'text-[#7c3aed] font-semibold',
                                    'test':     'text-primary font-semibold',
                                    'it':       'text-primary font-semibold',
                                    'describe': 'text-primary font-semibold',
                                    'expect':   'text-secondary font-semibold',
                                    'should':   'text-secondary font-semibold',
                                };
                                return <span key={i} className={colors[part] || ''}>{part}</span>;
                            })}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Live Suite badge */}
            <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Live Suite</span>
            </div>

            {/* Hover shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
};
