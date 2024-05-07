---
sidebar_label: Windows
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing RGBDS on Windows

The install instructions are a bit different depending on the environment in which you wish to use RGBDS.

<Tabs>
<TabItem value="wsl" label="WSL">

Please refer to [the install instructions](linux.md) for your WSL's running Linux distribution.
You can check what your WSL distribution is by running `wsl -l -v` in the Command Prompt.
(The default Linux distribution on WSL is Ubuntu, whose package manager is `apt`.)

</TabItem>
<TabItem value="cygwin" label="Cygwin / MSYS2">

1. Go the [latest release](https://github.com/gbdev/rgbds/releases/latest) (or pick a specific version from [the list](https://github.com/gbdev/rgbds/releases)).
2. Under "Assets" at the bottom, download either <code>rgbds-<var>&lt;version&gt;</var>-win32.zip</code> (for 32-bit Windows) or <code>rgbds-<var>&lt;version&gt;</var>-win64.zip</code> (for 64-bit Windows).
   (For example, version 0.7.0 for 64-bit Windows would have `rgbds-0.7.0-win64.zip`).
3. Unzip the .zip file.
   It should give you the RGBDS `.exe` files and a couple of `.dll` files.
4. Copy all of those `.exe` and `.dll` files to the `/usr/local/bin` directory of your Cygwin/MSYS2 installation.
   (You can learn its equivalent Windows path by running `cygpath -w /usr/local/bin` in the Cygwin terminal.)

   :::caution

   Do not put them in a subdirectory (e.g. `/usr/local/bin/rgbds/`)!
   This would not work.

   :::

After that, you should be able to use RGBDS from within the Cygwin/MSYS2 terminal, which you can confirm by running `rgbasm -V`.

If `rgbasm -V` doesn't work, check that `/usr/local/bin` is listed in your Cygwin/MSYS2 `PATH` (run `echo $PATH` to check).
If it isn't listed, you must add it (e.g. run `echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc`, then close your Cygwin terminal and open a new one).

:::tip

If you can choose between using Cygwin or MSYS2, be advised that Cygwin is slower and has been reported to cause a bit of trouble to some.

:::

</TabItem>
<TabItem value="win32" label="None of those">

1. Go the [latest release](https://github.com/gbdev/rgbds/releases/latest) (or pick a specific version from [the list](https://github.com/gbdev/rgbds/releases))
2. Under "Assets" at the bottom, download either <code>rgbds-<var>&lt;version&gt;</var>-win32.zip</code> (for 32-bit Windows) or <code>rgbds-<var>&lt;version&gt;</var>-win64.zip</code> (for 64-bit Windows).
   (For example, version 0.7.0 for 64-bit Windows would have `rgbds-0.7.0-win64.zip`).
3. Unzip the .zip file.
   It should give you the RGBDS `.exe` files and a couple of `.dll` files.
4. Either:
   - ...put all of the files in a directory, then add that directory to Windows' `PATH`.
     This will *permanently* allow you to use RGBDS *from any directory*.

     <Tabs>
     <TabItem value="gui" label="Graphically">

       1. Open the Environment Variables dialog for your account.
          You can do this by either:
          - ...typing "edit environment variables for your account" in the Start menu's Search box and clicking the Control Panel item that's found.
          - ...opening the Control Panel, clicking its "User Accounts" item, clicking the "User Accounts" heading in that item, and clicking "Change my environment variables" in the sidebar.
       2. Click the "Path" line in the **top** panel to highlight it.
       6. Click "Edit..." to open the "Edit environment variable" dialog for "Path".
       7. Click "Browse...", select the folder that the RGBDS files are in, and click OK.
       8. The folder should be added to the bottom of the "Path" list.
          Make sure that the new entry (which should be highlighted) is at the bottom of the list; if not, click on "Move Down" until it is.
       9. Click "OK" to finish the "Edit environment variable" dialog, and again for the "Environment Variables" dialog.

     </TabItem>
     <TabItem value="cmd" label="Command Prompt">

       Run the command <code>setx PATH "%PATH%<var>&lt;rgbds_path&gt;</var>;"</code>, replacing <code><var>&lt;rgbds_path&gt;</var></code> with the path to the directory that contains `rgbasm.exe`, `rgblink.exe`, etc.
       Then close the Command Prompt and open a new one for the changes to take effect.

       If you only want to modify the `PATH` temporarily, instead of the permanent [`setx`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx) command, you can use the **temporary** [`set`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1).

     </TabItem>
     <TabItem value="pwsh" label="PowerShell">

       Run the command <code>setx PATH \$\{Env:PATH\}<var>&lt;rgbds_path&gt;</var>;</code>, replacing <code><var>&lt;rgbds_path&gt;</var></code> with the path to the directory that contains `rgbasm.exe`, `rgblink.exe`, etc.
       Then close the PowerShell window and open a new one for the changes to take effect.

       If you only want to modify the `PATH` temporarily, instead of the permanent [`setx`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx) command, you can use the **temporary** [`set`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1).

     </TabItem>
     </Tabs>

   - ...or put all of the files in your project's directory.
   - ...or put all of the files in a directory already in the `PATH`.
5. RGBDS can now be used from your favorite command line (most likely the Command prompt or PowerShell).
   You can test it by running `rgbasm -V`, which should print the version you installed!

</TabItem>
</Tabs>
