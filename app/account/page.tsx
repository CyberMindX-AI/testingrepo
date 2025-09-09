import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
      <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-800">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Account Page (Redirected)</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            This page has been moved. Please use the new signup or dashboard pages.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300">
              If you want to sign up, please go to the{" "}
              <a href="/auth/signup" className="text-blue-600 hover:underline">
                Sign Up page
              </a>
              .
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              If you are already logged in, visit your{" "}
              <a href="/dashboard" className="text-blue-600 hover:underline">
                Dashboard
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
