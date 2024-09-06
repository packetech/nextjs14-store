import Stripe from "stripe"

export async function POST(request, res) {
    const body = JSON.parse(request.body)
    if (body.lineItems.length === 0) {
        
        return res.sendStatus(405)
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
            apiVersion: '2024-06-20'
        })

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        })
        return res.status(201).json({ session })

    } catch (err) {
        console.log('BROKED')
        console.log(err)
        res.sendStatus(500)
    }
}