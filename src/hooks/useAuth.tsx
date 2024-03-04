import { useAppSelector } from "./typescriptHooks/typescript";

export function useAuth () {
    const email = useAppSelector(state => state.user.email)
    return email
}