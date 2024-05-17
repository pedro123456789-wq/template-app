# Tech Cortex web app base template
This is the base template to be used for every project. It contains all of the set up required to get a project up and running quickly. 

## Tech Stack
* Next.JS - full-stack framework built on top of React (https://nextjs.org/)
* Supabase - hosted, open source PostgreSQL database infrastructure (https://supabase.com/)
* Daisy UI + Tailwind CSS - pre-built, high quality css classes for high-speed development (https://daisyui.com/, https://tailwindcss.com/) 

## Getting Started
### Creating a plan
Before writing any code, you must create a rough plan of your web application. The bare minimum is a database entity relationship diagram for the tables you are going to use. It would also help to create some rough ui sketches, but I understand that some people don't need to do this. 

### Creating the Supabase database
1. Create a supabase account. For small projects you can create a new email specifically for this and use the free plan, but for larger projects you will receive an account with a Pro plan. 
1. Create a new project then write the details in the comment in the layout.tsx file so you don't forget them. 
1. Inside the new project go to settings > API. Then copy the url, public key and private keys to the appropriate sections in the .env.local file. 
1. In the tables section create the required tables, and be careful to add appropriate row level security policies (https://supabase.com/docs/guides/database/postgres/row-level-security)

### Installing the required packages
1. In your local machine navigate to the project directory, inside the folder with package.json and run 'npm install'.
1. To start the application locally run 'npm run dev'
1. You are now ready to develop. 

### Stripe + Cloudflare R2 
In some projects you may need to use Stripe to handle payments, or a Cloudflare R2 bucket to store large files. The files in the 'utils' folder can help you achieve this. 
<br>IF YOUR PROJECT DOES NOT USE STRIPE AND / OR R2 DELETE THE ENVIRONMENT VARIABLES RELARTED TO THEM IN .env.local. YOU CAN ALSO DELETE THE 'stripe' AND 'cloudflareR2' FOLDERS. 

### Handing In + Deployment
In most cases, you will not be required to deploy the project. To hand over the project to me just send me a zip file of the entire code directory. 
<br>It is important that you send a video explaining your designs and how the program works, as well as any important details. In some cases you will be provided with a vercel account to deploy the project. In these cases it is important you forget to set up the environment variables in the vercel deployment. 

### Good Luck
Now it's time for you to do your magic. Please pay attention to the project requirements, and I look forward to see the finished product. 
<br>If you have any queries or concerns do not hesitate to contact me through the discord group-chat or using my email: pl156176@gmail.com. 


