"use client"

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import axios from "axios";

interface SubscriptionButtonProps {
    isPro: boolean;
}


const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {

    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const onClick = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast({
                description: "Something went wrong",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    }


    return (
        <Button disabled={loading} onClick={onClick} size="sm" variant={isPro ? "default" : "premium"}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Sparkles className="h-4 w-4 ml-2 fill-white" />}
        </Button>
    )
};

export default SubscriptionButton;
