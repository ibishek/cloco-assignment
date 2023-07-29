<script setup lang="ts">
import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";
import Label from "@/components/atoms/Label.vue";
import Error from "@/components/atoms/Error.vue";
import { createToaster } from "@meforma/vue-toaster";
import { useForm } from "laravel-precognition-vue";
import { useRouter } from "vue-router";

const registerFrom = useForm("post", "/api/users", {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    street_address_one: "",
    street_address_two: "",
    state: "",
    district: "",
    country: "",
    password: "",
    password_confirmation: "",
});

const toast = createToaster();
const router = useRouter();

const register = () =>
    registerFrom
        .submit()
        .then((response) => {
            registerFrom.reset();
            router.push({
                name: "user-index",
            });
            toast.info("User created successfully. Please, login");
        })
        .catch((error) => {
            toast.error(error.response.data);
        });
</script>

<template>
    <div class="bg-white px-6 py-8 shadow-lg">
        <h1 class="text-center text-2xl font-bold text-gray-800">Register</h1>
        <form
            @submit.prevent="register"
            class="mx-auto mt-4 max-w-md space-y-4"
        >
            <div class="space-y-2">
                <Label for="first_name">First name:</Label>
                <Input
                    id="first_name"
                    v-model="registerFrom.first_name"
                    placeholder="Jon"
                    class="w-full"
                    @change="registerFrom.validate('first_name')"
                />
                <Error v-if="registerFrom.invalid('first_name')">
                    {{ registerFrom.errors.first_name }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="last_name">Last name:</Label>
                <Input
                    id="last_name"
                    v-model="registerFrom.last_name"
                    placeholder="Doe"
                    class="w-full"
                    @change="registerFrom.validate('last_name')"
                />
                <Error v-if="registerFrom.invalid('last_name')">
                    {{ registerFrom.errors.last_name }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="gender">Gender:</Label>
                <div class="space-x-2">
                    <input
                        type="radio"
                        v-model="registerFrom.gender"
                        name="gender"
                        value="m"
                        id="male"
                    />
                    <label for="male" class="text-gray-700">Male</label>
                </div>
                <div class="space-x-2">
                    <input
                        type="radio"
                        v-model="registerFrom.gender"
                        name="gender"
                        value="f"
                        id="female"
                    />
                    <label for="female" class="text-gray-700">Female</label>
                </div>
                <div class="space-x-2">
                    <input
                        type="radio"
                        v-model="registerFrom.gender"
                        name="gender"
                        value="o"
                        id="other"
                    />
                    <label for="other" class="text-gray-700">Other</label>
                </div>
                <Error v-if="registerFrom.invalid('gender')">
                    {{ registerFrom.errors.gender }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    id="email"
                    v-model="registerFrom.email"
                    placeholder="someone@one.com"
                    class="w-full"
                    @change="registerFrom.validate('email')"
                />
                <Error v-if="registerFrom.invalid('email')">
                    {{ registerFrom.errors.email }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="phone">Phone number:</Label>
                <Input
                    type="text"
                    id="phone"
                    v-model="registerFrom.phone"
                    placeholder="0123456789"
                    class="w-full"
                    @change="registerFrom.validate('phone')"
                />
                <Error v-if="registerFrom.invalid('phone')">
                    {{ registerFrom.errors.phone }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="dob">Date of Birth:</Label>
                <Input
                    type="date"
                    id="dob"
                    v-model="registerFrom.dob"
                    placeholder="1995-10-15"
                    class="w-full"
                    @change="registerFrom.validate('dob')"
                />
                <Error v-if="registerFrom.invalid('dob')">
                    {{ registerFrom.errors.dob }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="str1">Street address one:</Label>
                <Input
                    type="text"
                    id="str1"
                    v-model="registerFrom.street_address_one"
                    placeholder="121-07 Jamaica Ave"
                    class="w-full"
                    @change="registerFrom.validate('street_address_one')"
                />
                <Error v-if="registerFrom.invalid('street_address_one')">
                    {{ registerFrom.errors.street_address_one }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="str2">Street address two:</Label>
                <Input
                    type="text"
                    id="str2"
                    v-model="registerFrom.street_address_two"
                    placeholder="121th street"
                    class="w-full"
                    @change="registerFrom.validate('street_address_two')"
                />
                <Error v-if="registerFrom.invalid('street_address_two')">
                    {{ registerFrom.errors.street_address_two }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="state">State:</Label>
                <Input
                    type="text"
                    id="state"
                    v-model="registerFrom.state"
                    placeholder="121th street"
                    class="w-full"
                    @change="registerFrom.validate('state')"
                />
                <Error v-if="registerFrom.invalid('state')">
                    {{ registerFrom.errors.state }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="district">District:</Label>
                <Input
                    type="text"
                    id="district"
                    v-model="registerFrom.district"
                    placeholder="121th street"
                    class="w-full"
                    @change="registerFrom.validate('district')"
                />
                <Error v-if="registerFrom.invalid('district')">
                    {{ registerFrom.errors.district }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="country">Country:</Label>
                <Input
                    type="text"
                    id="country"
                    v-model="registerFrom.country"
                    placeholder="121th street"
                    class="w-full"
                    @change="registerFrom.validate('country')"
                />
                <Error v-if="registerFrom.invalid('country')">
                    {{ registerFrom.errors.country }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="password">Password:</Label>
                <Input
                    type="password"
                    id="password"
                    v-model="registerFrom.password"
                    placeholder="password"
                    class="w-full"
                    @change="registerFrom.validate('password')"
                />
                <Error v-if="registerFrom.invalid('password')">
                    {{ registerFrom.errors.password }}
                </Error>
            </div>
            <div class="space-y-2">
                <Label for="confirmPassword">Confirm password:</Label>
                <Input
                    type="password"
                    id="confirmPassword"
                    v-model="registerFrom.password_confirmation"
                    placeholder="password"
                    class="w-full"
                />
                <Error v-if="registerFrom.invalid('password_confirmation')">
                    {{ registerFrom.errors.password_confirmation }}
                </Error>
            </div>
            <Button type="submit">Create</Button>
        </form>
    </div>
</template>
