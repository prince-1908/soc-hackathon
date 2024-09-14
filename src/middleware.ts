// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { isLoggedIn } from './appwriteConfig/userAuth';

export async function middleware(req: NextRequest) {

    let loggedIn: boolean = false;

    
      const user=  await isLoggedIn();
      console.log('user logged' + user);
      
        if(user!==null){
            loggedIn = true
        }
        else
            loggedIn = false;


   

    const quizPageUrl = new URL('/quiz', req.url);
    const loginPageUrl = new URL('/login', req.url);

    if (loggedIn) {
        return NextResponse.redirect(quizPageUrl);
    }
    else {
        return NextResponse.redirect(loginPageUrl);
    }
}

export const config = {
    matcher: ['/quiz']
};
