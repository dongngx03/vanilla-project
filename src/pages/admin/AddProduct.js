import { useEffect } from "@/utilities"


const AddProduct = () => {

    useEffect(() => {
        const name = document.getElementById('name');
        const price = document.getElementById('price');
        const desc = document.getElementById('desc');
        
    })
  return /*html */ `
    <div class="tw-w-full tw-h-screen d-flex justify-content-center align-items-center">
        <div class="tw-w-1/2 tw-h-auto tw-p-3">
            <h3 class="text-center">Add Product</h3>
            <form action="" id="addProduct">
                <div>
                    <label class="">Product name</label>
                    <input type="text" id="name" class="form-control" />
                </div>
                <div>
                    <label class="">Price</label>
                    <input type="number" id="price" class="form-control" />
                </div>
                <div>
                    <label class="">Quantity</label>
                    <input type="number" id="desc" class="form-control" />
                </div>
                <div>
                   <button class="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    </div>
  `
}

export default AddProduct