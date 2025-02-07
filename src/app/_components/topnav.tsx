import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export function TopNav() {
    return (
      <nav className="flex items-center justify-between flex-wrap p-6 text-xl 
      font-semibold border-b">
        <div>Shopping List</div>
        <div>Search</div>
        <div>Add Item</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }