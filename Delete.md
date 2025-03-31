To turn this into a shortcode in Hugo, you already have the correct structure since this is written in Go templates, which Hugo uses for shortcodes. However, to ensure it works as a shortcode, you need to make sure the file is placed in the correct directory and is invoked properly in your content files.

### Steps to Turn This into a Shortcode:

1. **File Placement**:  
  Ensure the file is located in the `layouts/shortcodes/` directory of your Hugo project. In your case, the file is already in the correct directory:  
  `/themes/PolyRhythmic/layouts/shortcodes/actions/button_segmented.html`.

2. **Shortcode Invocation**:  
  To use this shortcode in your content files, you need to invoke it using the `{{< >}}` or `{{% %}}` syntax. For example:

  ```markdown
  {{< button_segmented
     name="exampleName"
     type="radio"
     buttons="[
      {\"id\": \"btn1\", \"value\": \"1\", \"label\": \"Option 1\", \"checked\": \"checked\"},
      {\"id\": \"btn2\", \"value\": \"2\", \"label\": \"Option 2\"}
     ]"
  >}}
  ```

3. **Handle Parameters in the Shortcode**:  
  Update your shortcode to handle the parameters passed during invocation. For example:

  ```html
  <div class="set segmented-buttons">
    {{ $name := .Get "name" }}
    {{ $type := .Get "type" }}
    {{ $buttons := .Get "buttons" | unmarshal }}

    {{ range $index, $button := $buttons }}
     <label
      {{ $button.disabled }}
      class="component button segmented
      {{ if eq $index 0 }}
        start
      {{ else if eq $index (sub (len $buttons) 1) }}
        end
      {{ end }}">

      <input
        type="{{ $type }}"
        id="{{ $button.id }}"
        name="{{ $name }}"
        value="{{ $button.value }}"
        {{ $button.disabled }}
        {{ $button.checked }}/>

      {{ with $button.icon }}
        <i class="icon">
         {{ . }}
        </i>
      {{ end }}

      {{ $button.label }}
     </label>
    {{ end }}
  </div>
  ```

  Here, `.Get` is used to retrieve parameters passed to the shortcode, and `unmarshal` is used to parse the JSON string for the `buttons` parameter.

4. **Test the Shortcode**:  
  Add the shortcode invocation to one of your content files and verify that it renders correctly on your site.

Let me know if you need further clarification!
