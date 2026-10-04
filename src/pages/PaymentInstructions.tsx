import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LiquidBackground from "@/components/LiquidBackground";
import Logo from "@/components/Logo";
import ProfileButton from "@/components/ProfileButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Copy, Check, Upload } from "lucide-react";
import { toast } from "sonner";

const PaymentInstructions = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState<string>("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const amount = "6,700";
  const accountNumber = "1875139655";
  const bankName = "Smartcash";
  const accountName = "Emmanuel Yahaya";
  const referenceId = `REF${Date.now()}`;
