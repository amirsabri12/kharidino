import { ResponseDto } from "../dto/response.dto.ts";
import { SignupDto } from "../dto/signup.dto.ts";

export async function fetchSignUpApi(dto: SignupDto): Promise<ResponseDto> {
  const response = await fetch("import.meta.env.VITE_API_BASE_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  return await response.json();
}
