import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom";

import { Toaster, toast } from 'sonner'

export function LogCompo() {


    const [user, setUser] = React.useState({
        email: "",
        password: "",
      })

      const navigator = useNavigate();
    
      const handleInput = (e) =>
        {
          let name = e.target.name;
          let value = e.target.value;
        
          setUser({
            ...user,
            [name]: value,
          });
    
        };
    
        const handleLoginSubmit = async (e) =>
          {
            e.preventDefault();
            console.log("Clicked...!");

            try{
            const response = await fetch(`localhost:5173/api/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            });
            console.log(response);
            if(response.ok)
              {
                setUser({    
                  email: "",
                  password: "",});

                  navigator("/home")
              }
              else
              {
                console.log("response failed...!");

                toast("Register Failed...!", {
                  description: "Please use correct credencials",
                  action: {
                    label: "Continue",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
          }
          catch (error)
          {
            console.log("Register error: ", error);

            toast("Server Error", {
                description: "There is something worng with the server",
                action: {
                  label: "Continue",
                  onClick: () => console.log("Undo"),
                },
              })

          }
          };

  return (
    <div className="LogCompo_center">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
      <form onSubmit={handleLoginSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your account here. Click continue when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Please enter your email" name="email" value={user.email} onChange={handleInput} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Please enter your password" name="password" value={user.password} onChange={handleInput} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Continue</Button>
          </CardFooter>
        </Card>
        </form>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Register here. After saving, you'll be logged in!.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Please enter your name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Please enter your email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Please enter your password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Continue</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    <Toaster />
    </div>
  )
}
